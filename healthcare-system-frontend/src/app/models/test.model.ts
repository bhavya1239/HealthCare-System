import { DiagnosticCenter } from "./diagnostic-center.model";

export interface Test {
  testId: number;
  testName: string;
  diagnosticCenter: DiagnosticCenter;
}