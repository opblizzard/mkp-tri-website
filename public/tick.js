// tick.js: Real-time 15s tick for Astro/Alpine.js integration
(function () {
  if (typeof window === "undefined") return;
  window.mkptriTick = {
    value: Date.now(),
    listeners: [],
    subscribe(fn) {
      this.listeners.push(fn);
      fn(this.value);
      return () => {
        this.listeners = this.listeners.filter((l) => l !== fn);
      };
    },
    notify() {
      this.value = Date.now();
      this.listeners.forEach((fn) => fn(this.value));
    },
  };
  setInterval(() => window.mkptriTick.notify(), 15000);
})();
