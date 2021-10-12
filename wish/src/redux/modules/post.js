import React from 'react'
import { createAction, handleActions} from "redux-actions";
import { produce } from "immer";
import "moment";
import moment from "moment";

// Actions
const LOAD   = 'my-app/widgets/LOAD';
const CREATE = 'my-app/widgets/CREATE';
const EDIT_POST = "EDIT_POST";
const DELETE_POST = 'DELETE_POST'

//초기상태값
const initialState = {
    list: [{
        user_info: {
            user_name: "위시",
            user_profile: "https://images.unsplash.com/photo-1540331547168-8b63109225b7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=719&q=80",
        },
        image_url: "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
        content: "블라블라",
        insert_dt: moment().format("YYYY-MM-DD hh:mm:ss"),
        like_cnt: 10,
        comment_cnt : 10,
        is_like: false,
        is_me: false,
    }],
  };

// Reducer
export default function reducer(state = {}, action = {}) {
  switch (action.type) {
    // do reducer stuff
    default: return state;
  }
}

// Action Creators
export function loadWidgets() {
  return { type: LOAD };
}

export function createWidget(widget) {
  return { type: CREATE, widget };
}

export function updateWidget(widget) {
  return { type: UPDATE, widget };
}

export function removeWidget(widget) {
  return { type: REMOVE, widget };
}

// side effects, only as applicable
// e.g. thunks, epics, etc
export function getWidget () {
  return dispatch => get('/widget').then(widget => dispatch(updateWidget(widget)))
}