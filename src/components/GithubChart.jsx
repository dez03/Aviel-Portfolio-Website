import GitHubCalendar from "react-github-calendar";

export default function GithubChart() {
  return (

    
    <div className="relative w-full flex justify-center text-white">
      {/* <h1 className="inline-block transition-all duration-300 font-big_shoulders font-black text-7xl text-[#e0f024]">Github Chart</h1> */}
      <GitHubCalendar
        username="dez03"
        labels={{ totalCount: '{{count}} contributions' }}
        blockSize={15}
        blockMargin={5}
        color="#e0f024"
        fontSize={16}


        
      />
    </div>
  )
}