import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {K8sApiClientService} from "./k8s-api-client.service";
import { ComponentNameComponent } from './component-name/component-name.component';

@NgModule({
  imports: [CommonModule],
  providers: [K8sApiClientService],
  declarations: [ComponentNameComponent],
})
export class PluginModule {
}
