export default function Contact ({content}) {
  return (
    <div className="">
      <table className="table-auto">
        <tbody>
        {Object.keys(content).map((item, index) => {
            return (
              <tr key={index}>
                <td className="text-slate-500 text-base sm:text-xs font-bold min-w-[110px]">{item.toUpperCase()}</td>
                <td><a className="text-base sm:text-xs" href={content[item].link} target="_blank">{content[item].title}</a></td>
              </tr>
            )
        })}
        </tbody>
     </table>
    </div>
  )
}