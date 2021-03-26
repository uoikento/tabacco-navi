const [shops, setShops] = useState([])
const [searchKeyword, setSearchKeyword] = useState('')
const [genres, setGenres] = useState([])
const [searchLat, setSearchLat] = useState('')
const [searchLng, setSearchLng] = useState('')
const [searchGenre, setSearchGenre] = useState('')
const classes = useStyles()

shops = { shops }
genres = { genres }
searchKeyword = { searchKeyword }
searchLat = { searchLat }
searchLng = { searchLng }
searchGenre = { searchGenre }

xport default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="Item One" {...a11yProps(0)} />
        <Tab label="Item Two" {...a11yProps(1)} />
        <Tab label="Item Three" {...a11yProps(2)} />
        <Tab label="Item Four" {...a11yProps(3)} />
        <Tab label="Item Five" {...a11yProps(4)} />
        <Tab label="Item Six" {...a11yProps(5)} />
        <Tab label="Item Seven" {...a11yProps(6)} />
      </Tabs>

      <FormControl>
      <FormLabel>Select Area</FormLabel>
      {large_service_area.map(area => 
        <FormControlLabel
          value={area.code}
          control={<Checkbox />}
          label={area.name}
          labelPlacement="start"
        >

        </FormControlLabel>
          )}
      </FormControl>
    
      <FormControl>
        <FormControlLabel
          value={largeArea.code}
          control={<Checkbox />}
          label={largeArea.name}
          labelPlacement="start"
        >
            </FormControlLabel>
      </FormControl>
      <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
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

Area
      .getAreas(prefectureCode)
      .then(middleAreas => {
        setMiddleAreas(middleAreas)
      })