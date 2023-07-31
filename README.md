# SeverityCalc

**Bug Severity Definition**
You can calculate severity here:  
https://baxshitsatryan.github.io/SeverityCalc/

---
|**Browser**|**Weight**|
|--|--|
|All|1 |
|Google Chrome|0.8|
|Mozilla Firefox|0.2|
|Safari|0.1|
---

|**Reproducibility**|**Weight**|
|--|--|
| Always |1 |
|Sometimes|0.2|

---
|**Stage**|**Weight**|
|--|--|
| Production |0.8 |
|Testing|1|

---
|**Impact**|**Weight**|
|--|--|
|Blocking scenarios|1 |
|Critical functionality broken|0.8|
|It's an inconvenience|0.4|
|Cosmetic defect / not affects the user|0.1|

---
## SeverityWeight = Browser * Reproducibility * Stage * Impact * 100

If have support reports:
## SeverityWeight = Browser * Reproducibility * Stage * Impact * 100 + complaintNumber * 0.35

|**Minor**|**0-19**|
|--|--|
|**Medium**|**20-39**|
|**Major**|**40-59**|
|**Critical**|**60-79**|
|**Blocker**|**80-100**|
