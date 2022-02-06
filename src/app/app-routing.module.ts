import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskCreateComponent } from './components/task-create/task-create.component';
import { TaskEditComponent } from './components/task-edit/task-edit.component';
import { DashboardComponent } from './screens/dashboard/dashboard.component';
import { ListTaskComponent } from './screens/list-task/list-task.component';
import { LoginComponent } from './screens/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'list-task',
    component: ListTaskComponent
  },
  {
    path: 'task-edit',
    component: TaskEditComponent
  },
  {
    path: 'task-create',
    component: TaskCreateComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
