import { locationData } from '@/api/location'
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material'
import { TeamOperationForm } from '../../../types/types'

export const dueList = [
  '1주일',
  '2주일',
  '3주일',
  '4주일',
  '1개월',
  '2개월',
  '3개월',
  '4개월',
  '5개월',
  '6개월',
  '7개월',
  '8개월',
  '9개월',
  '10개월',
  '11개월',
  '12개월 이상',
]

export const SettingSelect = ({
  type,
  value,
  parentLocation,
  setValue,
}: {
  type: string
  value: string
  parentLocation?: string
  setValue: (event: SelectChangeEvent) => void
}) => {
  if (type === 'location') {
    return (
      <FormControl sx={{ m: 0, minWidth: 80 }} size="small">
        <InputLabel id="demo-select-small-label">지역</InputLabel>
        <Select
          labelId="demo-select-small-label"
          id="demo-select-small"
          value={value}
          label="지역"
          onChange={setValue}
          sx={{ backgroundColor: 'background.tertiary' }}
        >
          {!parentLocation &&
            locationData.map((region, idx) => (
              <MenuItem key={'region' + idx} value={region.name}>
                {region.name}
              </MenuItem>
            ))}
          {parentLocation &&
            locationData
              .find((region) => region.name === parentLocation)
              ?.subArea?.map((region, idx) => (
                <MenuItem key={'region' + idx} value={region}>
                  {region}
                </MenuItem>
              ))}
        </Select>
      </FormControl>
    )
  } else if (type === 'operationForm') {
    return (
      <FormControl sx={{ m: 0, minWidth: 80 }} size="small">
        <InputLabel id="demo-select-small-label">활동 방식</InputLabel>
        <Select
          labelId="demo-select-small-label"
          id="demo-select-small"
          value={value}
          label="활동 방식"
          onChange={setValue}
        >
          {[
            TeamOperationForm.OFFLINE,
            TeamOperationForm.ONLINE,
            TeamOperationForm.MIX,
          ].map((operation, idx) => (
            <MenuItem key={'operation' + idx} value={operation}>
              {operation === TeamOperationForm.OFFLINE && '오프라인'}
              {operation === TeamOperationForm.ONLINE && '온라인'}
              {operation === TeamOperationForm.MIX && '온/오프라인'}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    )
  } else if (type === 'dueTo') {
    return (
      <FormControl sx={{ m: 0, minWidth: 80 }} size="small">
        <InputLabel id="demo-select-small-label">목표 기간</InputLabel>
        <Select
          labelId="demo-select-small-label"
          id="demo-select-small"
          value={value}
          label="목표 기간"
          onChange={setValue}
        >
          {dueList.map((dueTo, idx) => (
            <MenuItem key={'dueTo' + idx} value={dueTo}>
              {dueTo}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    )
  } else if (type == 'dueToSearch') {
    {
      return (
        <FormControl sx={{ m: 0, minWidth: 80 }} size="small">
          <InputLabel id="demo-select-small-label">목표 기간</InputLabel>
          <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            value={value}
            label="목표 기간"
            onChange={setValue}
            defaultValue={'선택안함'}
          >
            <MenuItem value={'선택안함'}>선택안함</MenuItem>
            {dueList.map((dueTo, idx) => (
              <MenuItem key={'dueTo' + idx} value={dueTo}>
                {dueTo}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )
    }
  } else {
    return <div></div>
  }
}

export default SettingSelect
