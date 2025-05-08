import { CycleStructure } from "./cycle-structure.model";

export type CyclePriority = 'HIGH' | 'MEDIUM' | 'LOW';

export interface Cycle {
  name: string;
  availableEntities: number;
  priority: CyclePriority;
  structure: CycleStructure[];
}
