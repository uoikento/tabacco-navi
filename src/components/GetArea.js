import React, {useState, useEffect} from "react"
import Area from '../services/areas'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Collapse from '@material-ui/core/Collapse'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 224,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}))

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
  const [serviceCode, setServiceCode] = useState(0)

  useEffect(() => {
    Area
      .getAreas()
      .then(allAreas => {
        setAreas(allAreas)
        // console.log(allAreas)
    })
  }, [])

  // const handleLargeServiceArea = (code, i) => {
  //   setLargeArea(areas.filter(area => area.large_service_area.code == `${code}`))
  // }
  // console.log(largeArea)

  const [checked, setChecked] = useState(false)

  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }
  // const [checked, setChecked] = React.useState(false);

  // const handleChange = () => {
  //   setChecked((prev) => !prev);
  // }
  const a11yProps = (index) => {
    return {
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
    }
  }
  // const LargeAreaSelect = () => {
  //   return (
      
  //   )
  // }
  
  const clickHandle = (s_code) => {
    console.log(s_code)
    // setChecked((prev) => !prev)
    setLargeArea(areas.filter(area => area.large_service_area.code == `${s_code}`))
  }

  function TabPanel(props) {
    const { children, value, index, ...other } = props
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    )
  }
  const Index = [0, 1, 2, 3, 4, 5, 6, 7, 8]
  
  return (
    <div className={classes.root}>
      <FormLabel>Select Area</FormLabel>
    <Tabs
      orientation="vertical"
      variant="scrollable"
      value={value}
      onChange={handleChange}
      aria-label="Vertical tabs example"
      className={classes.tabs}
    >
      {large_service_area.map((service, index) =>
        <Tab label={service.name} {...a11yProps(index)} onClick={() => clickHandle(service.code)} />
        )}
      </Tabs>
      {Index.map(i => 
        <TabPanel value={value} index={i}>
          {largeArea.map(l_area => <li>{l_area.name}</li>)}
        </TabPanel>
        )}
    </div>
  )
}

export default GetArea
