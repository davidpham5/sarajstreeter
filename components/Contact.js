export default function Contact ({content}) {
  console.log(content);
  return (
    <div className="">
      <table className="table-auto">
        <tbody>
        {Object.keys(content).map((item, index) => {
            return (
              <tr key={index}>
                <td className="text-slate-500 text-xs font-bold min-w-[110px]">{item.toUpperCase()}</td>
                <td>{content[item]}</td>
              </tr>
            )
        })}
        </tbody>
     </table>
    </div>
  )
}