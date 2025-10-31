import GitHubCalendar from "react-github-calendar";
import { GiStack } from "react-icons/gi";

export default function GithubChart() {
  return (

    
    <div className="relative flex flex-col justify-between w-full h-[220px] rounded-3xl bg-[#0f1118] border border-[#1b1e27] p-6 overflow-hidden hover:border-[#e1b70e] transition-colors duration-200">
      {/* <h1 className="inline-block transition-all duration-300 font-big_shoulders font-black text-7xl text-[#e0f024]">Github Chart</h1> */}
      <div className="flex items-center gap-2 bg-[#161922] text-gray-300 text-xs font-medium px-3 py-1 rounded-full w-max shadow-inner">
        {/* <TbKeyboard className="text-gray-400" size={14} /> */}
        <GiStack size={14} className="text-white" />
        GitHub Activity
      </div>
      <GitHubCalendar
        username="dez03"
        labels={{ totalCount: '{{count}} contributions' }}
        blockSize={15}
        blockMargin={5}
        hideColorLegend={true}
        color="#e0f024"
        style={{ color: '#ffffff' }}
        fontSize={16}
      />
    </div>
  )
}