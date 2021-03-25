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