interplolation will work with string type only not for boolean etc. types.
use property binding to bind property with any type.
   <!-- property binding-->
  <input [disabled]='isDisabled' type='text' value='anurag not disabled'/>
  <input bind-disabled='isDisabled' type='text' value='anurag not disabled'/>