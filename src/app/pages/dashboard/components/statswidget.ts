import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { ToastModule } from 'primeng/toast';

@Component({
    standalone: true,
    selector: 'app-stats-widget',
    imports: [ToastModule, DialogModule, ButtonModule, CommonModule],
    template: `<div class="col-span-12 lg:col-span-6 xl:col-span-3">
            <div class="card mb-0">
                <div class="flex justify-between mb-4">
                    <div>
                        <span class="block text-muted-color font-medium mb-4">系統核銷通知: </span>
                        <div class="text-surface-900 dark:text-surface-0 font-medium text-xm">今日累計共25筆</div>
                    </div>
                </div>
                <div class="flex justify-between mb-4">
                    <div> 
                        <span class="block text-muted-color font-medium mb-4">核銷完成筆數通知: </span>
                        <div class="text-surface-900 dark:text-surface-0 font-medium text-xm">本月截止日前累積共6,000筆</div>
                    </div>
                </div>
                <span class="text-muted-color">通知建立時間:</span><br>
                <span class="text-primary font-medium">115-01-15 05:15:09</span>
            </div>
        </div>
        <div class="col-span-12 lg:col-span-6 xl:col-span-3">
            <div class="card mb-0">
                <div class="flex justify-between mb-4">
                    <div>
                        <span class="block text-muted-color font-medium mb-4">系統核銷通知: </span>
                        <div class="text-surface-900 dark:text-surface-0 font-medium text-xm">今日累計共25筆</div>
                    </div>
                </div>
                <div class="flex justify-between mb-4">
                    <div> 
                        <span class="block text-muted-color font-medium mb-4">核銷完成筆數通知: </span>
                        <div class="text-surface-900 dark:text-surface-0 font-medium text-xm">本月截止日前累積共6,000筆</div>
                    </div>
                </div>
                <span class="text-muted-color">通知建立時間:</span><br>
                <span class="text-primary font-medium">115-01-15 05:15:09</span>
            </div>
        </div>
        <div class="col-span-12 lg:col-span-6 xl:col-span-3">
            <div class="card mb-0">
                <div class="flex justify-between mb-4">
                    <div>
                        <span class="block text-muted-color font-medium mb-4">系統核銷通知: </span>
                        <div class="text-surface-900 dark:text-surface-0 font-medium text-xm">今日累計共25筆</div>
                    </div>
                </div>
                <div class="flex justify-between mb-4">
                    <div> 
                        <span class="block text-muted-color font-medium mb-4">核銷完成筆數通知: </span>
                        <div class="text-surface-900 dark:text-surface-0 font-medium text-xm">本月截止日前累積共6,000筆</div>
                    </div>
                </div>
                <span class="text-muted-color">通知建立時間:</span><br>
                <span class="text-primary font-medium">115-01-15 05:15:09</span>
            </div>
        </div>
        <div class="col-span-12 lg:col-span-6 xl:col-span-3">
            <div class="card">
                <div class="font-semibold text-xl mb-4">系統提示</div>
                <p-dialog header="系統提示!" [(visible)]="display" [breakpoints]="{ '960px': '75vw' }" [style]="{ width: '30vw' }" [modal]="true">
                    <p class="leading-normal m-0">
                        您好！您登入本網站已閒置了一段時間。為了保護您的帳戶安全，我們將在
          <span class="text-red-500">60</span>
          秒後自動登出您的帳戶。
        <br><br>
        如果您仍在使用我們的網站，請點擊“繼續”按鈕以延長您的登入時間。如果您不再使用我們的網站，請點擊“登出”按鈕以登出您的帳戶。
                    </p>
                    <br><br>
                    <ng-template #footer>
                        <p-button label="關閉" (click)="close()" />
                    </ng-template>
                </p-dialog>
                <p-button label="系統提示" [style]="{ width: 'auto' }" (click)="open()" />
            </div>
        </div>`
})


export class StatsWidget {

    display: boolean = false;

    open() {
        this.display = true;
    }

    close() {
        this.display = false;
    }
}
