import React, {useState} from "react"
import Area from '../services/areas'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import InputLabel from '@material-ui/core/InputLabel'
import TextField from '@material-ui/core/TextField'
import Chip from '@material-ui/core/Chip'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 224,
    width: "30vw"
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}))

const prefecture = [
  {code: "Z011", name: "東京"},
  {code: "Z012", name: "神奈川"},
  {code: "Z013", name: "埼玉"},
  {code: "Z014", name: "千葉"},
  {code: "Z015", name: "茨城"},
  {code: "Z016", name: "栃木"},
  {code: "Z017", name: "群馬"},
  {code: "Z021", name: "滋賀"},
  {code: "Z022", name: "京都"},
  {code: "Z023", name: "大阪"},
  {code: "Z024", name: "兵庫"},
  {code: "Z025", name: "奈良"},
  {code: "Z026", name: "和歌山"},
  {code: "Z031", name: "岐阜"},
  {code: "Z032", name: "静岡"},
  {code: "Z033", name: "愛知"},
  {code: "Z034", name: "三重"},
  {code: "Z041", name: "北海道"},
  {code: "Z051", name: "青森"},
  {code: "Z052", name: "岩手"},
  {code: "Z053", name: "宮城"},
  {code: "Z054", name: "秋田"},
  {code: "Z055", name: "山形"},
  {code: "Z056", name: "福島"},
  {code: "Z061", name: "新潟"},
  {code: "Z062", name: "富山"},
  {code: "Z063", name: "石川"},
  {code: "Z064", name: "福井"},
  {code: "Z065", name: "山梨"},
  {code: "Z066", name: "長野"},
  {code: "Z071", name: "鳥取"},
  {code: "Z072", name: "島根"},
  {code: "Z073", name: "岡山"},
  {code: "Z074", name: "広島"},
  {code: "Z075", name: "山口"},
  {code: "Z081", name: "徳島"},
  {code: "Z082", name: "香川"},
  {code: "Z083", name: "愛媛"},
  {code: "Z084", name: "高知"},
  {code: "Z091", name: "福岡"},
  {code: "Z092", name: "佐賀"},
  {code: "Z093", name: "長崎"},
  {code: "Z094", name: "熊本"},
  {code: "Z095", name: "大分"},
  {code: "Z096", name: "宮崎"},
  {code: "Z097", name: "鹿児島"},
  {code: "Z098", name: "沖縄"},
]

const GetArea = (props) => {
  const classes = useStyles()
  const [middleAreas, setMiddleAreas] = useState([])
  const [prefectureCode, setPrefectureCode] = useState("")
  const selectMiddle = props.selectMiddle
// console.log(prefectureCode)
  const handlePrefectureChange = (e) => {
    setPrefectureCode(e.target.value)
  }

  const handleMiddleChange = (e) => {
    const keyword = e.target.value
    Area
      .getAreas({
        large_area: prefectureCode,
        keyword: `${keyword}`
      })
      .then(middleAreas => {
        setMiddleAreas(middleAreas)
      })
    }

  const handleClick = (m_code) => {
    props.setSelectMiddle(selectMiddle.concat(m_code))
  }

  const handleDelete = (index) => {
    if (selectMiddle.length == 1) {
      props.setSelectMiddle([])
    } else {
      const deleteSelectMiddle = selectMiddle.splice(index, 1)
      console.log(deleteSelectMiddle)
      props.setSelectMiddle(deleteSelectMiddle)
    }
  }

console.log(selectMiddle)
// console.log(middleAreas)
  return (
    <FormControl className={classes.root}>
      {selectMiddle.length !== 0
        ? <div>{selectMiddle.map((selectMiddle, index) => <Chip size="small" key={index} label={selectMiddle.name} onDelete={() => handleDelete(index)} color="primary" />) }</div>
        : <Typography>select</Typography>
      }
      <InputLabel>Prefecture</InputLabel>
      <Select
        // className={classes.form}
        value={prefectureCode}
        onChange={handlePrefectureChange}
      >
        <MenuItem key='delete' value={''}>-</MenuItem>
          {prefecture.map((prefecture) => (
            <MenuItem key={prefecture.name} value={prefecture.code} >{prefecture.name}</MenuItem>
          ))}
      </Select>
      <TextField id="standard-basic" label="Standard" onChange={handleMiddleChange} />
      {middleAreas.length !== 0
        ? <div>
            {middleAreas.map(middle =>
              <Chip
                variant="outlined"
                size="small"
                label={middle.name}
                key={middle.code}
                onClick={() => handleClick(middle)}
                color="primary"
              />
              )
            }
          </div>
        : <Typography>kakak</Typography>
      }
    </FormControl>
  )
}

export default GetArea