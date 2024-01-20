import Chart from '../../chart/Chart'
import FeaturedInfo from '../../featuredInfo/FeaturedInfo'
import './home.css'
import {userData} from '../../../../src/DemoData'
import WidgetSm from '../../widgetSm/WidgetSm'
import WidgetLg from '../../widgetLg/WidgetLg'
export default function Home() {
  return (
    <div className='home'>
      <FeaturedInfo />
      <Chart data={userData} title="User Analyics"  gird dataKey="Active User"/>
      <div className='homeWidgets'>
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  )
}
