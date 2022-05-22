import { type DeepReadonly, onMounted, onUnmounted, readonly, type Ref, ref } from "vue";
import type { adapterListener } from "./adapterListener";

export function useAdapterState<S>(adapter: adapterListener<S>): DeepReadonly<Ref<S>> {
    const state = ref(adapter.state) as Ref<S>;

    const stateSubscription = (newState: S) => {
        state.value = newState;
    };

    onMounted(() => {
        adapter.subscribe(stateSubscription);
    });

    onUnmounted(() => {
        adapter.unsubscribe(stateSubscription);
    });

    return readonly(state);
}
