import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StyleClassModule } from 'primeng/styleclass';
import { AppConfigurator } from './app.configurator';
import { LayoutService } from '../service/layout.service';

@Component({
    selector: 'app-topbar',
    standalone: true,
    imports: [RouterModule, CommonModule, StyleClassModule, AppConfigurator],
    template: ` <div class="layout-topbar">
        <div class="layout-topbar-logo-container">
            <button class="layout-menu-button layout-topbar-action" (click)="layoutService.onMenuToggle()">
                <i class="pi pi-bars"></i>
            </button>
            <ul class="inline-flex mt-auto">
                <li class="mr-[7px]">
                    <a class="layout-topbar-logo" routerLink="/">
                        <img src="assets/ctbc_logo.jpg" class="w-[148px] h-[54px]" />
                    </a>
                </li>
                <li class="mr-[7px]">
                    <div class="mt-[25px] border-l-[white] border-l border-solid h-10"></div>
                </li>
                <li class="!pt-[7px] mr-[7px]">
                    <a>
                        <img src="assets/fund-logo(平面鏤空).gif" class="!w-[44px] !h-[38px]"/>
                    </a>
                </li>
            </ul>
            <ul class="flow-root mr-[7px]">
                <li>
                    <a class="!pt-[10px] !pb-[10px]">
                        <span class="!text-[gold] !text-[26px]">公務人員退休撫卹基金管理局</span>
                        <span class="!text-[#dde5e7] !text-[16px]"><br />Bureau of Public Service Pension Fund</span>
                    </a>
                </li>
            </ul>
            <ul>
                <li>
                    <a>
                        <span class="text-[gold] text-[34px]">個人專戶制退撫儲金繳納作業平台</span>
                        <span class="text-[yellow] text-[12px] italic">
                            &nbsp;&nbsp;Prototype Ver:&nbsp;&nbsp;xxxxxx
                        </span>
                    </a>
                </li>
            </ul>
        </div>

        <div class="layout-topbar-actions">
            <div class="layout-config-menu">
                <button type="button" class="layout-topbar-action" (click)="toggleDarkMode()">
                    <i [ngClass]="{ 'pi ': true, 'pi-moon': layoutService.isDarkTheme(), 'pi-sun': !layoutService.isDarkTheme() }"></i>
                </button>
                <div class="relative">
                    <button
                        class="layout-topbar-action layout-topbar-action-highlight"
                        pStyleClass="@next"
                        enterFromClass="hidden"
                        enterActiveClass="animate-scalein"
                        leaveToClass="hidden"
                        leaveActiveClass="animate-fadeout"
                        [hideOnOutsideClick]="true"
                    >
                        <i class="pi pi-palette"></i>
                    </button>
                    <app-configurator />
                </div>
            </div>

            <button class="layout-topbar-menu-button layout-topbar-action" pStyleClass="@next" enterFromClass="hidden" enterActiveClass="animate-scalein" leaveToClass="hidden" leaveActiveClass="animate-fadeout" [hideOnOutsideClick]="true">
                <i class="pi pi-ellipsis-v"></i>
            </button>

            <div class="layout-topbar-menu hidden lg:block">
                <div class="layout-topbar-menu-content">
                    <button type="button" class="layout-topbar-action">
                        <i class="pi pi-calendar"></i>
                        <span>Calendar</span>
                    </button>
                    <button type="button" class="layout-topbar-action">
                        <i class="pi pi-inbox"></i>
                        <span>Messages</span>
                    </button>
                    <button type="button" class="layout-topbar-action">
                        <i class="pi pi-user"></i>
                        <span>Profile</span>
                    </button>
                </div>
            </div>
        </div>
    </div>`
})
export class AppTopbar {
    items!: MenuItem[];

    constructor(public layoutService: LayoutService) {}

    toggleDarkMode() {
        this.layoutService.layoutConfig.update((state) => ({ ...state, darkTheme: !state.darkTheme }));
    }
}
