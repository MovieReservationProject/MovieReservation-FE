import { createSlice } from '@reduxjs/toolkit';
import dayjs from 'dayjs'

const reservationtSlice = createSlice({
    name : 'reservation',
    initialState:{
        selectmovie:'',
        selectcinema:'',
        selectdate: new Date(),
        selecttime:'',
    },
    reducers:{
        selectmovie(state,action){
            const selectmovie = action.payload
            state.selectmovie = selectmovie
        },
        selectcinema(state,action){
            const movietheaters = action.payload.movietheaters
            const selectcinema = action.payload
            state.selectcinema = selectcinema
        },
        selectdate(state,action){
            const selectdate = action.payload
            state.selectdate = selectdate
        },
        selecttime(state,action){
            const selecttime = action.payload
            state.selecttime = selecttime
        },


    }

    })

export const reservationAction = reservationtSlice.actions;

export default reservationtSlice;