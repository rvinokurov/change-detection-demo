import {inject, Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {DOCUMENT} from '@angular/common';

export interface OpenMessage {
  isOpen: boolean;
  coords?: {
    top: number;
    left: number;
    right: number;
    bottom: number;
  };
  content?: string;
}
// todo отписки не интересны для учебного проекта
@Injectable({
  providedIn: 'root',
})
export class TooltipService {
  private readonly document = inject<Document>(DOCUMENT);

  constructor() {
    this.document.addEventListener('click', () => {
      this.isOpenSubject$.next({ isOpen: false });
    });
  }

  private readonly isOpenSubject$ = new BehaviorSubject<OpenMessage>({
    isOpen: false,
  });

  readonly isOpen$ = this.isOpenSubject$.asObservable();

  show(element: HTMLElement, content: string) {
    const rect = element.getBoundingClientRect();
    this.isOpenSubject$.next({
      isOpen: true,
      coords: rect,
      content: content,
    });
  }
}
