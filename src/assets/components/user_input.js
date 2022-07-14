import { useState } from "react";
import { Select, MenuItem } from "@corva/ui/components";

export function UserInputSection() {
  const [rigEfficiency, setRigEfficiency] = useState();
  const [value, setValue] = useState();

  return (
    <>
      <Select
        label="Rig efficiency"
        value={rigEfficiency}
        onChange={(event) => setRigEfficiency(event.target.value)}
      >
        <MenuItem value="low">Low</MenuItem>
        <MenuItem value="medium">Medium</MenuItem>
        <MenuItem value="high">High</MenuItem>
      </Select>

      <Select
        label="Rig efficiency"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      >
        <MenuItem value="low">Low</MenuItem>
        <MenuItem value="medium">Medium</MenuItem>
        <MenuItem value="high">High</MenuItem>
      </Select>
    </>
  );
}