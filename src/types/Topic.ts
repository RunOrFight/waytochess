import {Lesson} from ".";

export interface Topic {
    id: string;
    name: string;
    description: string;
    lessons: Lesson[];
}
