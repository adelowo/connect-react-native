import React from 'react';
import { MonoContext } from './mono-provider';
function useMonoConnect() {
    var context = React.useContext(MonoContext);
    if (context === undefined) {
        throw new Error("MonoConnectButton must be used within a MonoProvider");
    }
    return context;
}
export default useMonoConnect;
