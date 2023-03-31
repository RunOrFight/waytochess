import { Lesson } from ".";

export interface Topic {
    id: number;
    name: string;
    description: string;
    lessons: Lesson[];
}
