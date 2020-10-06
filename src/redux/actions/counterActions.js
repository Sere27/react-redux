import { log } from "console";
import * as actionTypes from "./actionTypes";

export const increaseCounter = () => ({
	type: actionTypes.INCREASE_COUNTER,
	payload: 1,
});

export const decreaseCounter = () => ({
	type: actionTypes.DECREASE_COUNTER,
	payload: 1,
});

export const increaseByTwCounter = () => ({
	type: actionTypes.INCREAS_BY_TO_COUNTER,
	payload: 2,
});

//en alt payload 2 olma sebebi 2 2 artacagından
