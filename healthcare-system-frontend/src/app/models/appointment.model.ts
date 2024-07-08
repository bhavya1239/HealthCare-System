import { DiagnosticCenter } from "./diagnostic-center.model";
import { User } from "./user.model";

export interface Appointment {
  appointmentId: number;
  user: User;
  diagnosticCenter: DiagnosticCenter;
  datetime: string;
  approved: boolean;
}