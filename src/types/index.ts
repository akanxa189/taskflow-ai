// src/types/index.ts

export type Priority = "low" | "medium" | "high" | "urgent";
export type TaskStatus = "backlog" | "todo" | "in_progress" | "done";

export interface User {
  id: string;
  email: string;
  name: string;
  avatar_url?: string;
}

export interface Task {
  _id: string;
  title: string;
  description?: string;
  status: TaskStatus;
  priority: Priority;
  project_id: string;
  assignee_id?: string;
  due_date?: string;
  created_at: string;
  updated_at: string;
  subtasks?: Subtask[];
  tags?: string[];
}

export interface Subtask {
  id: string;
  title: string;
  completed: boolean;
}

export interface Project {
  _id: string;
  name: string;
  description?: string;
  owner_id: string;
  members: string[];
  created_at: string;
  color: string;
}

export interface Column {
  id: TaskStatus;
  title: string;
  tasks: Task[];
}