import {
  ChevronDown,
  TrendingDown,
  TrendingUp,
  X,
} from "lucide-react";
import Gauge from "./Gauge";

function TogglePill({
  left,
  right,
}: {
  left: string;
  right: string;
}) {
  return (
    <div className="mt-4 flex rounded-full bg-neutral-100 p-1 text-xs font-medium text-neutral-500">
      <button className="flex-1 rounded-full bg-white px-3 py-1.5 text-neutral-950 shadow-sm">
        {left}
      </button>
      <button className="flex-1 rounded-full px-3 py-1.5">{right}</button>
    </div>
  );
}

function SelectGroup({ label, value }: { label: string; value: string }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium text-neutral-700">
        {label}
      </span>
      <button
        type="button"
        className="flex w-full items-center justify-between rounded-lg border border-neutral-200 px-3 py-2 text-left text-sm text-neutral-900"
      >
        <span>{value}</span>
        <ChevronDown className="h-4 w-4 text-neutral-500" />
      </button>
    </label>
  );
}

function InputGroup({ label, value }: { label: string; value: string }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium text-neutral-700">
        {label}
      </span>
      <div className="flex items-center rounded-lg border border-neutral-200 px-3 py-2 text-sm text-neutral-900">
        <span className="mr-1 text-neutral-400">#</span>
        <input
          className="w-full bg-transparent outline-none"
          value={value}
          readOnly
        />
      </div>
    </label>
  );
}

function ClicksCard() {
  return (
    <section className="rounded-2xl bg-white p-5">
      <div className="flex items-center justify-between text-[13px] font-medium">
        <span className="text-[#ef4d23]">Clicks</span>
        <span className="text-neutral-500">This Month</span>
      </div>

      <div className="mt-4 flex items-center gap-2">
        <div className="text-[28px] font-semibold leading-none text-neutral-950">
          6,896
        </div>
        <span className="inline-flex items-center gap-1 rounded-full bg-red-50 px-2 py-0.5 text-[11px] font-medium text-red-600">
          <TrendingDown className="h-3 w-3" />
          -3,382 (33%)
        </span>
      </div>
      <p className="mt-2 text-xs text-neutral-500">Compared to yesterday</p>

      <p className="mt-5 text-center text-sm font-medium text-neutral-900">
        Month Target achieved
      </p>
      <Gauge value={92} color="#ef4d23" showLabels min="389K" max="425K" />
      <TogglePill left="Impressions" right="Clicks" />
    </section>
  );
}

function FormCard() {
  return (
    <section className="flex flex-col gap-3 rounded-2xl bg-white p-5">
      <SelectGroup label="Show figures for" value="This month" />
      <SelectGroup label="Compare period by" value="Month-to-date (MTD)" />
      <InputGroup label="Ste targets (This month)" value="10" />
      <InputGroup label="Ste targets (This year)" value="100" />

      <div className="mt-1 flex items-center gap-4">
        <button className="rounded-lg bg-[#ef4d23] px-5 py-2 text-sm font-medium text-white">
          Save
        </button>
        <button className="text-sm font-medium text-neutral-700 underline underline-offset-4">
          Cancel
        </button>
        <button className="ml-auto text-neutral-400" aria-label="Close">
          <X className="h-5 w-5" />
        </button>
      </div>
    </section>
  );
}

function VideoStartsCard() {
  return (
    <section className="rounded-2xl bg-white p-5 sm:col-span-2 lg:col-span-1">
      <div className="flex items-center justify-between text-[13px] font-medium">
        <span className="text-[#ef4d23]">Video Starts</span>
        <span className="text-neutral-500">today</span>
      </div>

      <div className="mt-4 flex items-center gap-2">
        <div className="text-[28px] font-semibold leading-none text-neutral-950">
          0
        </div>
        <span className="inline-flex items-center gap-1 rounded-full bg-neutral-100 px-2 py-0.5 text-[11px] font-medium text-neutral-500">
          <TrendingUp className="h-3 w-3" />
          0
        </span>
      </div>
      <p className="mt-2 text-xs text-neutral-500">Compared to yesterday</p>

      <div className="mt-5">
        <Gauge value={68} color="#9ca3af" />
      </div>
      <TogglePill left="Video Clicks" right="Video Starts" />
    </section>
  );
}

export default function DashboardPreview() {
  return (
    <div className="px-3 sm:px-4">
      <div className="mx-auto w-full max-w-[880px] rounded-3xl bg-[#f5f2ee] p-4 sm:p-6">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          <ClicksCard />
          <FormCard />
          <VideoStartsCard />
        </div>
      </div>
    </div>
  );
}
