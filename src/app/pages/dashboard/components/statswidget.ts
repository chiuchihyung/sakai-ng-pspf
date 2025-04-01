import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    standalone: true,
    selector: 'app-stats-widget',
    imports: [CommonModule],
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
        </div>`
})
export class StatsWidget {}
