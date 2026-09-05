"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  FiCheck,
  FiChevronRight,
  FiPause,
  FiPlay,
  FiRefreshCw,
  FiVolume2,
  FiVolumeX,
} from "react-icons/fi";

type TimerMode = {
  id: string;
  label: string;
  detail: string;
  minutes: number;
  accent: string;
};

type AlarmSound = "digital" | "gentle-birds" | "nature-chime";

const modes: TimerMode[] = [
  {
    id: "pomodoro",
    label: "Pomodoro",
    detail: "Focus + short breaks",
    minutes: 25,
    accent: "var(--accent)",
  },
  {
    id: "deep",
    label: "Deep work",
    detail: "Long-form focus",
    minutes: 50,
    accent: "#e08a63",
  },
  {
    id: "custom",
    label: "Custom",
    detail: "Make it yours",
    minutes: 15,
    accent: "#d1a656",
  },
  {
    id: "stopwatch",
    label: "Stopwatch",
    detail: "Count up from zero",
    minutes: 0,
    accent: "#6aa8d8",
  },
];

const alarmSoundOptions: { id: AlarmSound; label: string }[] = [
  {
    id: "digital",
    label: "Digital",
  },
  {
    id: "gentle-birds",
    label: "Gentle birds",
  },
  {
    id: "nature-chime",
    label: "Nature chime",
  },
];

function formatTime(seconds: number) {
  const minutes = Math.floor(seconds / 60)
    .toString()
    .padStart(2, "0");

  const remainingSeconds = (seconds % 60).toString().padStart(2, "0");

  return `${minutes}:${remainingSeconds}`;
}

function formatStopwatchTime(milliseconds: number) {
  const totalSeconds = Math.floor(milliseconds / 1000);

  const minutes = Math.floor(totalSeconds / 60)
    .toString()
    .padStart(2, "0");

  const seconds = (totalSeconds % 60).toString().padStart(2, "0");

  const millisecondsPart = Math.floor((milliseconds % 1000) / 10)
    .toString()
    .padStart(2, "0");

  return `${minutes}:${seconds}.${millisecondsPart}`;
}

export default function TimerWorkspace() {
  const [activeMode, setActiveMode] = useState("pomodoro");

  const [pomodoroPhase, setPomodoroPhase] = useState<"focus" | "break">(
    "focus",
  );

  const [pomodoroRound, setPomodoroRound] = useState(1);

  const [customMinutes, setCustomMinutes] = useState(15);

  const [remaining, setRemaining] = useState(25 * 60);

  const [stopwatchElapsedMs, setStopwatchElapsedMs] = useState(0);

  const stopwatchElapsedRef = useRef(0);

  const [isRunning, setIsRunning] = useState(false);

  const [completed, setCompleted] = useState(0);

  const [soundEnabled, setSoundEnabled] = useState(true);

  const [alarmSound, setAlarmSound] = useState<AlarmSound>("digital");

  const [alarmActive, setAlarmActive] = useState(false);

  /*
   * Actual audio elements.
   *
   * alarmAudioRef:
   * Used for the real timer completion alarm.
   *
   * previewAudioRef:
   * Used separately so Preview doesn't interfere
   * with the active alarm.
   */
  const alarmAudioRef = useRef<HTMLAudioElement | null>(null);
  const previewAudioRef = useRef<HTMLAudioElement | null>(null);

  const mode = useMemo(
    () => modes.find((item) => item.id === activeMode) ?? modes[0],
    [activeMode],
  );

  const isPomodoro = activeMode === "pomodoro";
  const isStopwatch = activeMode === "stopwatch";

  const pomodoroMinutes = pomodoroPhase === "focus" ? 25 : 5;

  const totalSeconds =
    (isStopwatch
      ? 0
      : isPomodoro
        ? pomodoroMinutes
        : activeMode === "custom"
          ? customMinutes
          : mode.minutes) * 60;

  const progress = isStopwatch
    ? 0
    : Math.min(
        100,
        Math.max(0, ((totalSeconds - remaining) / totalSeconds) * 100),
      );

  /*
   * Convert alarmSound to the actual public/sounds filename.
   */
  function getSoundPath(sound: AlarmSound) {
    return `/sounds/${sound}.mp3`;
  }

  /*
   * Stop the currently playing completion alarm.
   */
  function stopAlarmSound() {
    const audio = alarmAudioRef.current;

    if (!audio) return;

    audio.pause();
    audio.currentTime = 0;
  }

  /*
   * Stop preview audio.
   */
  function stopPreviewSound() {
    const audio = previewAudioRef.current;

    if (!audio) return;

    audio.pause();
    audio.currentTime = 0;
  }

  /*
   * Prepare the selected audio.
   *
   * We create the Audio element before the timer finishes.
   * This helps avoid unnecessary delay when the alarm starts.
   */
  function prepareAlarmSound(sound: AlarmSound = alarmSound) {
    const source = getSoundPath(sound);

    if (
      !alarmAudioRef.current ||
      alarmAudioRef.current.src !== new URL(source, window.location.href).href
    ) {
      stopAlarmSound();

      const audio = new Audio(source);

      audio.preload = "auto";
      audio.loop = true;
      audio.volume = 0.75;

      alarmAudioRef.current = audio;
    }

    return alarmAudioRef.current;
  }

  /*
   * Start actual nature alarm.
   */
  async function playAlarmSound() {
    if (!soundEnabled) return;

    const audio = prepareAlarmSound();

    if (!audio) return;

    audio.currentTime = 0;

    try {
      await audio.play();
    } catch (error) {
      /*
       * Browser autoplay restrictions can prevent
       * playback. The user will still see the alarm UI.
       */
      console.warn("Unable to play alarm sound:", error);
    }
  }

  /*
   * Countdown timer.
   */
  useEffect(() => {
    if (!isRunning || isStopwatch) return;

    const interval = window.setInterval(() => {
      setRemaining((current) => {
        if (current <= 1) {
          setIsRunning(false);
          setCompleted((count) => count + 1);
          setAlarmActive(true);

          return 0;
        }

        return current - 1;
      });
    }, 1000);

    return () => window.clearInterval(interval);
  }, [isRunning, isStopwatch]);

  /*
   * Start / stop the real nature alarm.
   *
   * No Web Audio oscillator is used here.
   */
  useEffect(() => {
    if (!alarmActive || !soundEnabled) {
      stopAlarmSound();
      return;
    }

    void playAlarmSound();

    return () => {
      stopAlarmSound();
    };
  }, [alarmActive, soundEnabled, alarmSound]);

  /*
   * Stopwatch.
   */
  useEffect(() => {
    if (!isRunning || !isStopwatch) return;

    const startedAt = performance.now() - stopwatchElapsedRef.current;

    const interval = window.setInterval(() => {
      const elapsed = Math.floor(performance.now() - startedAt);

      stopwatchElapsedRef.current = elapsed;

      setStopwatchElapsedMs(elapsed);
    }, 10);

    return () => window.clearInterval(interval);
  }, [isRunning, isStopwatch]);

  /*
   * Cleanup all audio when component unmounts.
   */
  useEffect(() => {
    return () => {
      stopAlarmSound();
      stopPreviewSound();
    };
  }, []);

  /*
   * Select timer mode.
   */
  function selectMode(id: string) {
    stopAlarmSound();
    stopPreviewSound();

    setActiveMode(id);
    setIsRunning(false);
    setAlarmActive(false);

    setPomodoroPhase("focus");
    setPomodoroRound(1);

    stopwatchElapsedRef.current = 0;
    setStopwatchElapsedMs(0);

    setRemaining(
      (id === "stopwatch"
        ? 0
        : id === "pomodoro"
          ? 25
          : id === "custom"
            ? customMinutes
            : (modes.find((item) => item.id === id)?.minutes ?? 25)) * 60,
    );
  }

  /*
   * Reset timer.
   */
  function resetTimer() {
    stopAlarmSound();
    stopPreviewSound();

    setIsRunning(false);
    setAlarmActive(false);

    stopwatchElapsedRef.current = 0;
    setStopwatchElapsedMs(0);

    setRemaining(isStopwatch ? 0 : totalSeconds);
  }

  /*
   * Skip timer.
   */
  function skipTimer() {
    stopAlarmSound();

    setIsRunning(false);
    setAlarmActive(false);

    setRemaining(0);
  }

  /*
   * Change Pomodoro phase.
   */
  function choosePomodoroPhase(phase: "focus" | "break") {
    if (!isPomodoro) return;

    stopAlarmSound();

    setPomodoroPhase(phase);
    setIsRunning(false);
    setAlarmActive(false);

    setRemaining((phase === "focus" ? 25 : 5) * 60);
  }

  /*
   * Dismiss completion alarm.
   */
  function dismissAlarm() {
    stopAlarmSound();

    setAlarmActive(false);

    if (isPomodoro) {
      const nextPhase = pomodoroPhase === "focus" ? "break" : "focus";

      setPomodoroPhase(nextPhase);

      if (nextPhase === "focus") {
        setPomodoroRound((round) => (round === 4 ? 1 : round + 1));
      }

      setRemaining((nextPhase === "focus" ? 25 : 5) * 60);
    }
  }

  /*
   * Custom timer length.
   */
  function updateCustomMinutes(value: number) {
    const nextValue = Math.min(120, Math.max(1, value || 1));

    setCustomMinutes(nextValue);

    if (activeMode === "custom" && !isRunning) {
      setRemaining(nextValue * 60);
    }
  }

  /*
   * Preview the selected nature sound.
   */
  async function playSoundPreview() {
    stopPreviewSound();

    const audio = new Audio(getSoundPath(alarmSound));

    audio.preload = "auto";
    audio.loop = false;
    audio.volume = 0.6;

    previewAudioRef.current = audio;

    try {
      await audio.play();
    } catch (error) {
      console.warn("Unable to preview alarm sound:", error);
    }
  }

  /*
   * Toggle sound.
   *
   * If the user mutes while an alarm is active,
   * immediately stop the audio.
   */
  function toggleSound() {
    setSoundEnabled((enabled) => {
      const nextEnabled = !enabled;

      if (!nextEnabled) {
        stopAlarmSound();
      }

      return nextEnabled;
    });
  }

  /*
   * Change sound.
   */
  function changeAlarmSound(sound: AlarmSound) {
    stopAlarmSound();
    stopPreviewSound();

    setAlarmSound(sound);
  }

  return (
    <section className="relative overflow-hidden bg-[var(--background)] px-6 py-16 md:py-24">
      <div className="pointer-events-none absolute left-1/2 top-24 h-80 w-80 -translate-x-1/2 rounded-full bg-[var(--glow-soft)] opacity-30 blur-[110px]" />

      <div className="relative mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-[var(--accent)]">
            Focus studio
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-6xl">
            Make time for the work.
          </h1>

          <p className="mt-5 max-w-xl text-base leading-7 text-[var(--muted)] sm:text-lg">
            Choose a rhythm, settle in, and let the clock hold the edges of your
            attention.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.78fr_1.22fr]">
          {/* SIDEBAR */}
          <aside className="rounded-3xl border border-[var(--border)] bg-[var(--surface)]/55 p-4 backdrop-blur-xl">
            <p className="px-3 pb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
              Modes
            </p>

            <div className="space-y-2">
              {modes.map((item) => {
                const isActive = item.id === activeMode;

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => selectMode(item.id)}
                    className={`flex w-full items-center justify-between rounded-2xl border p-4 text-left transition-all ${
                      isActive
                        ? "border-[var(--accent)]/40 bg-[var(--background)] shadow-[0_10px_30px_rgba(0,0,0,0.12)]"
                        : "border-transparent hover:border-[var(--border)] hover:bg-[var(--background)]/60"
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <span
                        className="h-2.5 w-2.5 rounded-full"
                        style={{
                          background: item.accent,
                          boxShadow: `0 0 14px ${item.accent}`,
                        }}
                      />

                      <span>
                        <span className="block text-sm font-semibold text-[var(--foreground)]">
                          {item.label}
                        </span>

                        <span className="mt-1 block text-xs text-[var(--muted)]">
                          {item.detail}
                        </span>
                      </span>
                    </span>

                    <span className="flex items-center gap-2 text-xs font-medium text-[var(--muted)]">
                      {item.id === "pomodoro"
                        ? "25 / 5 min"
                        : item.id === "stopwatch"
                          ? "Count up"
                          : item.id === "custom"
                            ? `${customMinutes} min`
                            : `${item.minutes} min`}

                      {isActive && <FiCheck className="text-[var(--accent)]" />}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* SOUND SETTINGS */}
            <div className="mt-6 border-t border-[var(--border)] px-3 pt-5">
              <div className="flex items-center justify-between text-xs text-[var(--muted)]">
                <span>Completed sessions</span>

                <div className="flex items-center gap-3">
                  <span className="font-mono text-[var(--foreground)]">
                    {completed.toString().padStart(2, "0")}
                  </span>

                  <button
                    type="button"
                    onClick={toggleSound}
                    aria-label={
                      soundEnabled
                        ? "Mute completion alarm"
                        : "Enable completion alarm"
                    }
                    title={
                      soundEnabled
                        ? "Mute completion alarm"
                        : "Enable completion alarm"
                    }
                    className="text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
                  >
                    {soundEnabled ? (
                      <FiVolume2 size={16} />
                    ) : (
                      <FiVolumeX size={16} />
                    )}
                  </button>
                </div>
              </div>

              <label className="mt-4 flex items-center justify-between gap-3 text-xs text-[var(--muted)]">
                <span>Alarm sound</span>

                <span className="flex items-center gap-2">
                  <select
                    value={alarmSound}
                    onChange={(event) =>
                      changeAlarmSound(event.target.value as AlarmSound)
                    }
                    className="max-w-[170px] rounded-lg border border-[var(--border)] bg-[var(--background)] px-2 py-1.5 text-xs text-[var(--foreground)] outline-none focus:border-[var(--accent)]"
                  >
                    {alarmSoundOptions.map((option) => (
                      <option key={option.id} value={option.id}>
                        {option.label}
                      </option>
                    ))}
                  </select>

                  <button
                    type="button"
                    onClick={playSoundPreview}
                    aria-label="Preview selected alarm sound"
                    title="Preview selected alarm sound"
                    className="inline-flex items-center gap-1 rounded-lg border border-[var(--border)] px-2 py-1.5 text-xs text-[var(--muted)] transition-colors hover:border-[var(--accent)]/40 hover:text-[var(--foreground)]"
                  >
                    <FiPlay size={12} />
                    Preview
                  </button>
                </span>
              </label>
            </div>
          </aside>

          {/* TIMER */}
          <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)]/45 p-6 backdrop-blur-xl sm:p-10">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-medium text-[var(--muted)]">
                  Now in
                </p>

                <h2 className="mt-1 text-2xl font-semibold text-[var(--foreground)]">
                  {isPomodoro
                    ? pomodoroPhase === "focus"
                      ? "Pomodoro focus"
                      : "Short break"
                    : mode.label}
                </h2>
              </div>

              <div className="rounded-full border border-[var(--border)] bg-[var(--background)]/60 px-3 py-1.5 text-xs font-medium text-[var(--muted)]">
                {isRunning
                  ? "In session"
                  : !isStopwatch && remaining === 0
                    ? "Complete"
                    : "Ready when you are"}
              </div>
            </div>

            {/* ALARM */}
            {alarmActive && (
              <div
                role="alert"
                className="mt-8 flex items-center justify-between gap-4 rounded-2xl border border-[var(--accent)]/35 bg-[var(--accent)]/[0.08] px-4 py-3"
              >
                <span className="text-sm font-medium text-[var(--foreground)]">
                  Time&apos;s up.
                </span>

                <button
                  type="button"
                  onClick={dismissAlarm}
                  className="rounded-full bg-[var(--accent)] px-4 py-2 text-xs font-semibold text-white transition-opacity hover:opacity-85"
                >
                  OK
                </button>
              </div>
            )}

            {/* POMODORO PHASE */}
            {isPomodoro && !alarmActive && (
              <div className="mt-8 flex flex-col gap-3 rounded-2xl border border-[var(--border)] bg-[var(--background)]/45 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
                <div
                  className="flex rounded-xl border border-[var(--border)] bg-[var(--background)]/60 p-1"
                  role="group"
                  aria-label="Pomodoro phase"
                >
                  {(["focus", "break"] as const).map((phase) => (
                    <button
                      key={phase}
                      type="button"
                      aria-pressed={pomodoroPhase === phase}
                      onClick={() => choosePomodoroPhase(phase)}
                      className={`rounded-lg px-3 py-1.5 text-xs font-medium capitalize transition-colors ${
                        pomodoroPhase === phase
                          ? "bg-[var(--accent)] text-white"
                          : "text-[var(--muted)] hover:text-[var(--foreground)]"
                      }`}
                    >
                      {phase}
                    </button>
                  ))}
                </div>

                <span className="text-xs text-[var(--muted)]">
                  Round{" "}
                  <span className="font-mono text-[var(--foreground)]">
                    {pomodoroRound} / 4
                  </span>
                </span>
              </div>
            )}

            {/* TIME */}
            <div className="mt-12 text-center sm:mt-16">
              <div
                className="font-mono text-7xl font-medium tracking-[-0.08em] text-[var(--foreground)] sm:text-9xl"
                aria-live="polite"
              >
                {isStopwatch
                  ? formatStopwatchTime(stopwatchElapsedMs)
                  : formatTime(remaining)}
              </div>

              {!isStopwatch && (
                <div className="mx-auto mt-8 h-1.5 max-w-md overflow-hidden rounded-full bg-[var(--background)]">
                  <div
                    className="h-full rounded-full bg-[var(--accent)] transition-[width] duration-1000"
                    style={{
                      width: `${progress}%`,
                    }}
                  />
                </div>
              )}
            </div>

            {/* CONTROLS */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={resetTimer}
                className="inline-flex h-12 items-center gap-2 rounded-full border border-[var(--border)] px-5 text-sm font-medium text-[var(--muted)] transition-colors hover:border-[var(--accent)]/40 hover:text-[var(--foreground)]"
              >
                <FiRefreshCw size={16} />
                Reset
              </button>

              <button
                type="button"
                onClick={() => {
                  /*
                   * Starting from a user click gives the browser
                   * an opportunity to allow audio playback later.
                   */
                  if (!isRunning && soundEnabled) {
                    const audio = prepareAlarmSound();

                    if (audio) {
                      audio
                        .play()
                        .then(() => {
                          audio.pause();
                          audio.currentTime = 0;
                        })
                        .catch(() => {
                          /*
                           * Ignore autoplay warm-up failures.
                           */
                        });
                    }
                  }

                  setIsRunning((running) => !running);
                }}
                disabled={!isStopwatch && remaining === 0}
                className="inline-flex h-12 items-center gap-2 rounded-full bg-[var(--accent)] px-7 text-sm font-semibold text-white transition-all hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isRunning ? <FiPause size={16} /> : <FiPlay size={16} />}

                {isRunning ? "Pause" : "Start"}
              </button>

              {!isStopwatch && (
                <button
                  type="button"
                  onClick={skipTimer}
                  className="inline-flex h-12 items-center gap-2 rounded-full border border-[var(--border)] px-5 text-sm font-medium text-[var(--muted)] transition-colors hover:border-[var(--accent)]/40 hover:text-[var(--foreground)]"
                >
                  Skip
                  <FiChevronRight size={16} />
                </button>
              )}
            </div>

            {/* CUSTOM TIMER */}
            {activeMode === "custom" && (
              <div className="mx-auto mt-10 flex max-w-xs items-center justify-between gap-4 border-t border-[var(--border)] pt-6">
                <label
                  htmlFor="custom-minutes"
                  className="text-sm text-[var(--muted)]"
                >
                  Session length
                </label>

                <div className="flex items-center gap-2">
                  <input
                    id="custom-minutes"
                    type="number"
                    min="1"
                    max="120"
                    value={customMinutes}
                    onChange={(event) =>
                      updateCustomMinutes(Number(event.target.value))
                    }
                    className="w-20 rounded-xl border border-[var(--border)] bg-[var(--background)] px-3 py-2 text-center font-mono text-sm text-[var(--foreground)] outline-none focus:border-[var(--accent)]"
                  />

                  <span className="text-sm text-[var(--muted)]">minutes</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
