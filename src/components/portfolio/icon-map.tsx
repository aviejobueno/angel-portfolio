import {
  Blocks,
  Bot,
  BriefcaseBusiness,
  Database,
  FolderGit2,
  Layers3,
  Mail,
  Network,
  ScanSearch,
  ServerCog,
  ShieldCheck,
  Waypoints,
  type LucideIcon,
} from "lucide-react";

import type { PortfolioIcon } from "@/data/portfolio";

export const iconMap: Record<PortfolioIcon, LucideIcon> = {
  backend: ServerCog,
  api: Waypoints,
  microservices: Blocks,
  architecture: Layers3,
  database: Database,
  modernization: ShieldCheck,
  ai: Bot,
  leadership: BriefcaseBusiness,
  delivery: Network,
  analysis: ScanSearch,
  contact: Mail,
  projects: FolderGit2,
};
