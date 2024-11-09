# Dododex's Admin Commands
This tool is completely open source! Feel free to add missing commands, fix errors, or add completely new features. If you want to help, but aren't sure where to start, see the [top feature requests](https://dododex.canny.io/feature-requests?category=admin-commands&sort=top)!

**[Open the Admin Commands Tool](https://dododex.github.io/admin-commands/)**

## Editing Ark Creature/Item Spawn Codes

**To contribute:**

1. Open [creatures.json](creatures.json)
2. Click "Edit"
3. Add new blueprints to the end of the file matching the file's format. (Order does not matter)

**Attributes:**

| Attribute | Description | Details | Example
| -- | -- | -- | -- |
| **t** | Type (Category) | One of the pre-defined categories listed on the admin commands page. | `Dinos`
| **cid** | Creature ID | Dododex's creature ID (the ID is listed the end of its Dododex profile URL: dododex.com/taming/raptor = raptor) | `raptor`
| **l** | Name of the item/creature | Should match the in-game name unless the in-game is not consistent. For example, "Turtle Egg" should be "Carbonemys Egg." | `Raptor`
| **id** | Blueprint ID | As listed in the Dev Kit | `Raptor_Character_BP_C`
| **bp** | Blueprint Path | | `PrimalEarth/Dinos/Raptor/Raptor_Character_BP.Raptor_Character_BP`

Note: Items are now pulled from Dododex's database rather than Github. Report any issues through the admin commands tool.

## Editing Ark Admin Commands 

**To contribute:**

1. Open [commands.json](commands.json)
2. Click "Edit"
3. Add new commands to the end of the file matching the file's format. (Order does not matter)

**Attributes:**

| Attribute | Description | Details |
| -- | -- | -- |
| **id** | Command | One of the pre-defined categories listed on the admin page. [Please contact me](https://discord.gg/KvmRSSV) to suggest new ones or changes |
| **c** | Full command with arguements | Command followed by each argument in brackets. |
| **e** | Example command | A working example. |
| **t** | Type (Category) | One of the pre-defined categories listed on the admin page.  |
| **d** | Description | A short description about what the command does. Written in gramtically correct English. |

# Contribute Mod Commands!
Mod owners (or mod users): Want your commands added to Dododex. Add them to the `bp.json` file with your Mod's name as the `t` attribute. If your mod has a large number of items and/or dinos. Please join the Dododex Discord and chat with Dan first. Thanks!

# Questions?

[Join Dododex's Discord](https://discord.gg/KvmRSSV) to chat or discuss this project!

