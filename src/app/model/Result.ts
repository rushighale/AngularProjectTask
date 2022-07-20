import { TodaysTasksEntity } from "./TodaysTasksEntity";
import { YesterdaysPlannedTasksEntity } from "./YesterdaysPlannedTasksEntity";

  export interface Result {
    todaysTasks?: (TodaysTasksEntity)[] | null;
    yesterdaysPlannedTasks?: (YesterdaysPlannedTasksEntity)[] | null;
  }
