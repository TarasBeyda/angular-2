import { NgModule }                     from '@angular/core';
import { BrowserModule }                from '@angular/platform-browser';
import { FormsModule }                  from '@angular/forms';

import { AppComponent }                 from './app.component';
import { ChildComponent }               from './child.component';
import { ThreeComponent }               from './three.component';
import { SetterComponent }              from './setter.component';
import { ConnectLaterComponent }        from './connectLater.component';
import { LifeCycleComponent }           from './lifeCycle.component';
import { LocalVariables }               from './localVariables.component';
import { ContentChildComponent }        from './contentChild.component';
import { ClassAndStyleComponent }       from './classAndStyle.component';

import { AttrDirective }                from './attr.directive';
import { BoldHostListenerDirective }    from './hostListener.directive';
import { BoldHostBindingDirective }     from './hostBinding.directive';
import { HostDirective }                from './hostHover.directive';
import { ParamsInDirective }            from './paramsIn.directive';


@NgModule({
    imports:      [ BrowserModule, FormsModule ],

    declarations: [ AppComponent,
                    ChildComponent,
                    ThreeComponent,
                    SetterComponent,
                    ConnectLaterComponent,
                    LifeCycleComponent,
                    LocalVariables,
                    ContentChildComponent,
                    ClassAndStyleComponent,

                    AttrDirective,
                    BoldHostListenerDirective,
                    BoldHostBindingDirective,
                    HostDirective,
                    ParamsInDirective],

    bootstrap:     [ AppComponent ]
})

export class AppModule { }