import { DiagnosticCenter } from "./diagnostic-center.model";
import { User } from "./user.model";

export interface Appointment {
  appointmentId:string;
  user: User;
  diagnosticCenter: DiagnosticCenter;
  datetime: string;
  approved: boolean;
}