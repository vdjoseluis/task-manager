export interface Task {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  userId: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateTask {
  title: string;
  description?: string;
}

export interface UpdateTask {
  title?: string;
  description?: string;
  completed?: boolean;
}
