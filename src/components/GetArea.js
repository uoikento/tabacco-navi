import React, {useState, useEffect} from "react"
import Area from '../services/areas'
import TreeView from '@material-ui/lab/TreeView'
import TreeItem from '@material-ui/lab/TreeItem'
import Slide from '@material-ui/core/Slide'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    height: 240,
    flexGrow: 1,
    maxWidth: 400,
  },
})

const large_service_area = [
  {
  code: "SS10",
  name: "関東"
  },
  {
  code: "SS20",
  name: "関西"
  },
  {
  code: "SS30",
  name: "東海"
  },
  {
  code: "SS40",
  name: "北海道"
  },
  {
  code: "SS50",
  name: "東北"
  },
  {
  code: "SS60",
  name: "北陸・甲信越"
  },
  {
  code: "SS70",
  name: "中国"
  },
  {
  code: "SS80",
  name: "四国"
  },
  {
  code: "SS90",
  name: "九州・沖縄"
  }
]
const GetArea = () => {
  const classes = useStyles()
  const [areas, setAreas] = useState([])
  const [largeArea, setLargeArea] = useState([])
  useEffect(() => {
    Area
      .getAreas()
      .then(allAreas => {
        setAreas(allAreas)
        // console.log(allAreas)
    })
  }, [])
  // const service_area = areas.large_service_area
  
  console.log(largeArea)
  const handleLargeServiceArea = (code,i) => {
    setLargeArea(areas.filter(area => area.large_service_area.code == `${code}`))
  }

  return (
    <TreeView
      className={classes.root}
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      onNodeToggle={toggleNode}
    >
      {/* <ul>{large_service_area.map(areas => <li>{areas.name}</li>)}</ul> */}
      {large_service_area.map((areas, i) =>
        <TreeItem key={i} nodeId={areas.code} label={areas.name} onLabelClick={() => handleLargeServiceArea(areas.code,i)} >
          {largeArea.map((largeAreas, largeI) =>
            <TreeItem key={largeI} nodeId={largeAreas.code} label={largeAreas.name}>
          </TreeItem>)}
        </TreeItem>)
      }
    </TreeView>
  )
}

export default GetArea