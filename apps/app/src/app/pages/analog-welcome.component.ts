import { Component } from '@angular/core';

@Component({
  selector: 'app-analog-welcome',

  host: {
    class:
      'flex min-h-screen flex-col text-zinc-900 bg-zinc-50 px-4 pt-8 pb-32',
  },
  template: `
    <main class="flex-1 mx-auto">
      <section class="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div class="flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <img
            class="h-12 w-12"
            src="https://analogjs.org/img/logos/analog-logo.svg"
            alt="AnalogJs logo. Two red triangles and a white analog wave in front"
          />
          <a
            class="rounded-2xl bg-zinc-200 px-4 py-1.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            target="_blank"
            href="https://twitter.com/analogjs"
            >Follow along on Twitter</a
          >
          <h1
            class="font-heading font-medium text-3xl sm:text-5xl md:text-6xl lg:text-7xl"
          >
            <span class="text-[#DD0031]">Analog.</span> The fullstack Angular
            meta-framework
          </h1>
          <p
            class="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8"
          >
            Analog is for building applications and websites with Angular.
            <br />Powered by Vite.
          </p>
          <div class="space-x-4">
            <a
              class="inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-zinc-950 text-zinc-50 hover:bg-zinc-950/90 h-11 px-8 rounded-md"
              href="https://analogjs.org"
              >Read the docs</a
            ><a
              target="_blank"
              rel="noreferrer"
              class="inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border border-input hover:bg-zinc-100 hover:text-zinc-950 h-11 px-8 rounded-md"
              href="https://github.com/analogjs/analog"
              >Star on GitHub</a
            >
          </div>
        </div>
      </section>
      <section id="counter-demo" class="container py-8 md:py-12 lg:py-24">
        <div
          class="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center"
        >
          <h2 class="text-[#DD0031] font-medium text-3xl leading-[1.1]">
            Counter
          </h2>
          <p
            class="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7"
          >
            This is a simple interactive counter. Powered by Angular.
          </p>
          <button
            (click)="increment()"
            class="inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border border-input hover:bg-zinc-100 hover:text-zinc-950 h-11 px-8 rounded-md"
          >
            Count: <span class="ml-1 font-mono">{{ count }}</span>
          </button>
        </div>
      </section>
    </main>
  `,
})
export class AnalogWelcomeComponent {
  public count = 0;
  public increment() {
    this.count++;
  }
}
