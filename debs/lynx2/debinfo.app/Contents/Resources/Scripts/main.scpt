FasdUAS 1.101.10   ��   ��    k             i         I     �� 	��
�� .aevtodocnull  �    alis 	 o      ���� 0 draggedfiles draggedFiles��    X     � 
��  
 k    �       l   ��  ��    ' ! Get the path of the dragged file     �   B   G e t   t h e   p a t h   o f   t h e   d r a g g e d   f i l e      r        n        1    ��
�� 
psxp  o    ���� 0 afile aFile  o      ���� $0 originalfilepath originalFilePath      l   ��������  ��  ��        l   ��  ��      Get the size in bytes     �   ,   G e t   t h e   s i z e   i n   b y t e s       r    ! ! " ! I   �� #��
�� .sysoexecTEXT���     TEXT # b     $ % $ m     & & � ' '  s t a t   - f % z   % n     ( ) ( 1    ��
�� 
strq ) o    ���� $0 originalfilepath originalFilePath��   " o      ���� 0 
normalsize 
normalSize    * + * r   " - , - , I  " +�� .��
�� .sysoexecTEXT���     TEXT . b   " ' / 0 / b   " % 1 2 1 m   " # 3 3 � 4 4  m d 5   2 o   # $���� $0 originalfilepath originalFilePath 0 m   % & 5 5 � 6 6 (   |   a w k   ' { p r i n t   $ N F } '��   - o      ���� 0 md5sum md5Sum +  7 8 7 r   . 9 9 : 9 I  . 7�� ;��
�� .sysoexecTEXT���     TEXT ; b   . 3 < = < b   . 1 > ? > m   . / @ @ � A A  s h a s u m   ? o   / 0���� $0 originalfilepath originalFilePath = m   1 2 B B � C C &   |   a w k   ' { p r i n t   $ 1 } '��   : o      ���� 0 sha1sum sha1Sum 8  D E D r   : E F G F I  : C�� H��
�� .sysoexecTEXT���     TEXT H b   : ? I J I b   : = K L K m   : ; M M � N N  s h a s u m   - a   2 5 6   L o   ; <���� $0 originalfilepath originalFilePath J m   = > O O � P P &   |   a w k   ' { p r i n t   $ 1 } '��   G o      ���� 0 	sha256sum 	sha256Sum E  Q R Q l  F F��������  ��  ��   R  S T S l  F F�� U V��   U L F Get Installed-Size using dpkg-deb with root privileges (if available)    V � W W �   G e t   I n s t a l l e d - S i z e   u s i n g   d p k g - d e b   w i t h   r o o t   p r i v i l e g e s   ( i f   a v a i l a b l e ) T  X Y X Q   F s Z [ \ Z r   I V ] ^ ] I  I T�� _��
�� .sysoexecTEXT���     TEXT _ b   I P ` a ` b   I N b c b m   I J d d � e e " s u d o   d p k g - d e b   - f   c n   J M f g f 1   K M��
�� 
strq g o   J K���� $0 originalfilepath originalFilePath a m   N O h h � i i    I n s t a l l e d - S i z e��   ^ o      ���� 0 installedsize installedSize [ R      ������
�� .ascrerr ****      � ****��  ��   \ k   ^ s j j  k l k l  ^ ^�� m n��   m , & Fallback if dpkg-deb is not available    n � o o L   F a l l b a c k   i f   d p k g - d e b   i s   n o t   a v a i l a b l e l  p�� p r   ^ s q r q I  ^ q�� s��
�� .sysoexecTEXT���     TEXT s b   ^ m t u t b   ^ i v w v b   ^ g x y x b   ^ c z { z m   ^ a | | � } } 
 a r   t   { o   a b���� $0 originalfilepath originalFilePath y m   c f ~ ~ �   H   |   g r e p   ' c o n t r o l . t a r . '   |   x a r g s   a r   p   w o   g h���� $0 originalfilepath originalFilePath u m   i l � � � � � h   c o n t r o l   |   g r e p   ' I n s t a l l e d - S i z e : '   |   a w k   ' { p r i n t   $ 2 } '��   r o      ���� 0 installedsize installedSize��   Y  � � � l  t t��������  ��  ��   �  � � � l  t t�� � ���   � . ( Build the output in the specified order    � � � � P   B u i l d   t h e   o u t p u t   i n   t h e   s p e c i f i e d   o r d e r �  � � � r   t � � � � b   t � � � � b   t � � � � b   t � � � � b   t � � � � b   t  � � � b   t } � � � b   t y � � � m   t w � � � � �  
 S i z e :   � o   w x���� 0 
normalsize 
normalSize � m   y | � � � � �  
 M D 5 S u m :   � o   } ~���� 0 md5sum md5Sum � m    � � � � � �  
 S H A 1 :   � o   � ����� 0 sha1sum sha1Sum � m   � � � � � � �  
 S H A 2 5 6 :   � o   � ����� 0 	sha256sum 	sha256Sum � o      ���� 
0 output   �  � � � l  � ���������  ��  ��   �  � � � l  � ��� � ���   � #  Copy the output to clipboard    � � � � :   C o p y   t h e   o u t p u t   t o   c l i p b o a r d �  ��� � I  � ��� ���
�� .JonspClpnull���     **** � o   � ����� 
0 output  ��  ��  �� 0 afile aFile  o    ���� 0 draggedfiles draggedFiles   ��� � l     ��������  ��  ��  ��       �� � ���   � ��
�� .aevtodocnull  �    alis � �� ���� � ���
�� .aevtodocnull  �    alis�� 0 draggedfiles draggedFiles��   � 	�������������������� 0 draggedfiles draggedFiles�� 0 afile aFile�� $0 originalfilepath originalFilePath�� 0 
normalsize 
normalSize�� 0 md5sum md5Sum�� 0 sha1sum sha1Sum�� 0 	sha256sum 	sha256Sum�� 0 installedsize installedSize�� 
0 output   � �������� &���� 3 5 @ B M O d h���� | ~ � � � � ���
�� 
kocl
�� 
cobj
�� .corecnte****       ****
�� 
psxp
�� 
strq
�� .sysoexecTEXT���     TEXT��  ��  
�� .JonspClpnull���     ****�� � ��[��l kh ��,E�O��,%j E�O�%�%j E�O�%�%j E�O�%�%j E�O ���,%�%j E�W X  a �%a %�%a %j E�Oa �%a %�%a %�%a %�%E�O�j [OY�wascr  ��ޭ