import { Stack, TextField } from '@mui/material'
import { DatePicker, TimePicker, DateTimePicker } from '@mui/lab'
import { useState } from 'react'

export const MuiDateTimePicker = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date())

  const handleDateChange = (newValue: Date | null) => {
    setSelectedDate(newValue || new Date())
  }

  const handleTimeChange = (newValue: Date | null) => {
    setSelectedDate(newValue || new Date())
  }

  const handleDateTimeChange = (newValue: Date | null) => {
    setSelectedDate(newValue || new Date())
  }

  return (
    <Stack spacing={4} sx={{ width: '250px' }}>
      <DatePicker
        label='Date Picker'
        value={selectedDate}
        onChange={handleDateChange}
        renderInput={(params) => <TextField {...params} />}
      />
      <TimePicker
        label='Time Picker'
        value={selectedDate}
        onChange={handleTimeChange}
        renderInput={(params) => <TextField {...params} />}
      />
      <DateTimePicker
        label='Date Time Picker'
        value={selectedDate}
        onChange={handleDateTimeChange}
        renderInput={(params) => <TextField {...params} />}
      />
    </Stack>
  )
}