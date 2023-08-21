import ReactHook from 'alova/react';
import GlobalFetch from 'alova/GlobalFetch';
import {createAlova} from 'alova';
import {axiosRequestAdapter} from '@alova/adapter-axios';
export const alovaInstance = createAlova({
	statesHook: ReactHook,
	requestAdapter:axiosRequestAdapter(),
})

