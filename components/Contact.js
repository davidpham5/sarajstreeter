export default function Contact ({content}) {
  console.log(content);
  return (
    <div className="">
      <table class="table-auto">
        <tbody>
        {Object.keys(content).map((item, index) => {
            return (
              <tr>
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