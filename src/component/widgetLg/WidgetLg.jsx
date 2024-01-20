import './widgetLg.css'

export default function WidgetSg() {
  const Button = ({type}) =>{
    return <button className={"widgetLgButton " + type}>{type}</button>
  }
  return (
    <div className='widgetLg'>
      <div className="widgetLg">
        <h3 className="widgetLgTitle">Latest Transaction</h3>
        <table className="widgetLgTable">
          <tr className="widgetLgTr">
            <th className="widgetLgTh">Customer</th>
            <th className="widgetLgTh">Date</th>
            <th className="widgetLgTh">Amount</th>
            <th className="widgetLgTh">Status</th>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img src="https://images.unsplash.com/photo-1484399172022-72a90b12e3c1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="widgetLgImg" />
              <span className="widgetLgName">Samina Khan</span>
            </td>
            <td className="widgetLgDate">5 Jan 2021</td>
            <td className="widgetLgAmount">$270.00</td>
            <td className="widgetLgStatus">
              <Button type="Approved" />
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img src="https://images.unsplash.com/photo-1604004555489-723a93d6ce74?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="widgetLgImg" />
              <span className="widgetLgName">Aysha Khan</span>
            </td>
            <td className="widgetLgDate">5 Feb 2021</td>
            <td className="widgetLgAmount">$350.00</td>
            <td className="widgetLgStatus">
              <Button type="Declined" />
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img src="https://plus.unsplash.com/premium_photo-1673039393866-130d3d092b66?q=80&w=1948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="widgetLgImg" />
              <span className="widgetLgName">Amna Ayaz</span>
            </td>
            <td className="widgetLgDate">4 Mar 2021</td>
            <td className="widgetLgAmount">$700.00</td>
            <td className="widgetLgStatus">
              <Button type="Pendiing" />
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img src="https://images.unsplash.com/photo-1496440737103-cd596325d314?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="widgetLgImg" />
              <span className="widgetLgName">Ajya Khan</span>
            </td>
            <td className="widgetLgDate">5 Apr 2021</td>
            <td className="widgetLgAmount">$570.00</td>
            <td className="widgetLgStatus">
              <Button type="Approved" />
            </td>
          </tr>
        </table>
      </div>
    </div>
  )
}
