; 工具提示样式的鼠标菜单(需要 XP/2k/NT) -- 作者: Rajat
; https://www.autohotkey.com
; 此脚本显示弹出菜单来响应短暂地按下鼠标中键的动作.
; 左键点击来选择菜单项.
; 在菜单外点击来取消菜单.
; 最近的改进是可以根据活动的窗口类型来改变菜单的内容.
; (这里使用了记事本和 Word 作为例子).

; You can set any title here for the menu:
MenuTitle = -=-=-=-=-=-=-=-

; This is how long the mouse button must be held to cause the menu to appear:
UMDelay = 20

SetFormat, float, 0.0
SetBatchLines, 10ms 
SetTitleMatchMode, 2
#SingleInstance


;___________________________________________
;_____Menu Definitions______________________

; Create / Edit Menu Items here.
; You can't use spaces in keys/values/section names.

; Don't worry about the order, the menu will be sorted.

MenuItems = Notepad/Calculator/Section 3/Section 4/Section 5


;___________________________________________
;______Dynamic menuitems here_______________

; Syntax:
;     Dyn# = MenuItem|Window title

Dyn1 = MS Word|- Microsoft Word
Dyn2 = Notepad II|- Notepad

;___________________________________________

Exit


;___________________________________________
;_____Menu Sections_________________________

; Create / Edit Menu Sections here.

Notepad:
Run, Notepad.exe
Return

Calculator:
Run, Calc
Return

Section3:
MsgBox, You selected 3
Return

Section4:
MsgBox, You selected 4
Return

Section5:
MsgBox, You selected 5
Return

MSWord:
MsgBox, this is a dynamic entry (word)
Return

NotepadII:
MsgBox, this is a dynamic entry (notepad)
Return


;___________________________________________
;_____Hotkey Section________________________

~MButton::
HowLong = 0
Loop
{
	HowLong ++
	Sleep, 10
	GetKeyState, MButton, MButton, P
	IfEqual, MButton, U, Break
}
IfLess, HowLong, %UMDelay%, Return


;prepares dynamic menu
DynMenu =
Loop
{
	IfEqual, Dyn%A_Index%,, Break

	StringGetPos, ppos, dyn%A_Index%, |
	StringLeft, item, dyn%A_Index%, %ppos%
	ppos += 2
	StringMid, win, dyn%A_Index%, %ppos%, 1000

	IfWinActive, %win%,
		DynMenu = %DynMenu%/%item%
}


;Joins sorted main menu and dynamic menu
Sort, MenuItems, D/
TempMenu = %MenuItems%%DynMenu%


;clears earlier entries
Loop
{
	IfEqual, MenuItem%A_Index%,, Break
	MenuItem%A_Index% =
}

;creates new entries
Loop, Parse, TempMenu, /
{
	MenuItem%A_Index% = %A_LoopField%
}

;creates the menu
Menu = %MenuTitle%
Loop
{
	IfEqual, MenuItem%A_Index%,, Break
	numItems ++
	StringTrimLeft, MenuText, MenuItem%A_Index%, 0
	Menu = %Menu%`n%MenuText%
}

MouseGetPos, mX, mY
Hotkey, ~LButton, MenuClick
Hotkey, ~LButton, On
ToolTip, %Menu%, %mX%, %mY%
WinActivate, %MenuTitle%
Return


MenuClick:
Hotkey, ~LButton, Off
IfWinNotActive, %MenuTitle%
{
	ToolTip
	Return
}

MouseGetPos, mX, mY
ToolTip
mY -= 3		;space after which first line starts
mY /= 13	;space taken by each line
IfLess, mY, 1, Return
IfGreater, mY, %numItems%, Return
StringTrimLeft, TargetSection, MenuItem%mY%, 0
StringReplace, TargetSection, TargetSection, %A_Space%,, A
Gosub, %TargetSection%
Return
