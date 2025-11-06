import GitHubCalendar from "react-github-calendar";
import { GiStack } from "react-icons/gi";

export default function GithubChart() {
  return (
    <div className="relative flex flex-col justify-between w-full h-[220px] rounded-2xl bg-white/5 border border-white/10 p-6 overflow-hidden hover:border-primary-400/50 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm group">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-accent-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="relative flex items-center gap-2 bg-white/10 text-gray-300 text-xs font-medium px-3 py-1.5 rounded-full w-max border border-white/10 mb-4">
        <GiStack size={14} className="text-primary-400" />
        <span>GitHub Activity</span>
      </div>
      <div className="relative">
        <GitHubCalendar
          username="dez03"
          labels={{ totalCount: '{{count}} contributions' }}
          blockSize={12}
          blockMargin={4}
          hideColorLegend={true}
          color="#22d3ee"
          style={{ color: '#ffffff' }}
          fontSize={14}
        />
      </div>
    </div>
  )
}