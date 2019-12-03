import { takeEvery, select, call, put } from 'redux-saga/effects';
import { IMAGES } from '../constants/index';
import { fetchImages } from '../api/index';
import { setImages, setError } from '../actions';

const getPage = state => state.nextPage;

/*Worker saga */
function* handleImagesLoad() {
    try {
        console.log('Inside handle load images');
        const page = yield select(getPage);
        const images = yield call(fetchImages, page);
        yield put(setImages(images));
    } catch (error) {
        //dispatch error
        yield put(setError(error.toString()));
    }
}

export default function* watchImagesLoad() {
    yield takeEvery(IMAGES.LOAD, handleImagesLoad);
}
