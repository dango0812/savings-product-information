"use client"
// react, next
import { useServerInsertedHTML } from "next/navigation";
import { useState } from "react";
// prop-types
import PropTypes from 'prop-types';
// emotion
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import EmotionGlobalStyles from "./emotion-global-styles";



export default function EmotionProvider({ children }) {

    const [cache] = useState(() => {
        const cache = createCache({ key: "css" });
        cache.compat = true;
        return cache;
    });
    
    useServerInsertedHTML(() => {
        return (
            <style
                data-emotion={`${cache.key} ${Object.keys(cache.inserted).join(" ")}`}
                dangerouslySetInnerHTML={{
                    __html: Object.values(cache.inserted).join(" "),
                }}
            />
        );
    });

    return (
        <CacheProvider value={cache}>
            <EmotionGlobalStyles />
            {children}

         
        </CacheProvider>
        
    );
}


EmotionProvider.propTypes = {
    children: PropTypes.node,
};
  