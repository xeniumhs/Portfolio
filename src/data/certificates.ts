import { Certificate } from "@/types";
import {
  FiAward,
  FiBarChart2,
  FiBookOpen,
  FiCode,
  FiDatabase,
  FiMonitor,
} from "react-icons/fi";
import type React from "react";

export const certificates: Certificate[] = [
  {
    title: "Full Stack Web Development",
    issuer: "GeeksforGeeks",
    date: "2026",
    icon: FiCode,
    certificateUrl: "/certificates/full_stack_certificate.pdf",
  },
];
