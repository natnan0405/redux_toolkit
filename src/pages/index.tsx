/*
 * @Author: SmartNan
 * @Date: 2021-09-14 10:34:04
 * @LastEditTime: 2021-10-18 17:31:37
 * @Description: 相关描述
 */
import styles from './index.less';
import { configureStore, createSlice, subscribe } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => state - 1,
  },
});

const { increment, decrement } = counterSlice.actions;
const store = configureStore({ reducer: counterSlice.reducer });
function render() {
  console.log(store.getState().toString());
}
render();
store.subscribe(render);

export default function IndexPage() {
  const countrClick = () => {
    console.log('///');
    store.dispatch(increment());
  };
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <p onClick={() => countrClick()}>sdsd</p>
    </div>
  );
}
