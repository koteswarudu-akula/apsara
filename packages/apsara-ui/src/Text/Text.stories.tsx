import React from "react";

import Text from "./Text";
export default {
    title: "General/Text",
    component: Text,
};

export const text = () => (
    <>
        <Text size={11}>11. Apsara</Text>
        <br />
        <Text size={12}>12. Apsara</Text>
        <br />
        <Text size={14}>14. Apsara</Text>
        <br />
        <Text size={16}>16. Apsara</Text>
        <br />
        <Text size={18}>18. Apsara</Text>
        <br />
        <Text size={20}>20. Apsara</Text>
        <br />
        <Text size={22}>22. Apsara</Text>
        <br />
        <Text size={25}>25. Apsara</Text>
        <br />
        <Text size={28}>28. Apsara</Text>
        <br />
        <Text size={32}>32. Apsara</Text>
        <br />
        <Text size={36}>36. Apsara</Text>
        <br />
        <Text size={40}>40. Apsara</Text>
        <br />
        <Text size={50}>50. Apsara</Text>
        <br />
        <Text size={60}>60. Apsara</Text>
    </>
);

export const customStyles = () => (
    <>
        <Text size={40} style={{ fontWeight: "normal" }}>
            Normal abcdefghijklmnopqrstuvwxyz
        </Text>
        <br />
        <Text size={40} style={{ fontWeight: "bold" }}>
            Bold abcdefghijklmnopqrstuvwxyz
        </Text>
        <br />
        <Text size={40} style={{ fontWeight: 900 }}>
            Bolder abcdefghijklmnopqrstuvwxyz
        </Text>
        <br />
        <Text size={40} style={{ fontStyle: "italic" }}>
            italic abcdefghijklmnopqrstuvwxyz
        </Text>
        <br />
        <Text size={40} style={{ fontStyle: "italic", fontWeight: "bold" }}>
            bold italic abcdefghijklmnopqrstuvwxyz
        </Text>
    </>
);